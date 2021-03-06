/**
 * @file folder.service.ts
 * @author shijh
 *
 * folder service
 */

import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import FolderModel from './folder.model';
import { folderInterface } from '../../interfaces/folder.interface'

const showItem = 'name page images _id childrens level urls';

const fetchFolder = {
    path: 'childrens images',
    select: showItem,
    populate: {
        path: 'childrens images',
        select: showItem,
        populate: {
            path: 'childrens images',
            select: showItem,
        }
    }
}

@Component()
export class FolderService {
    /**
     * 新增文件夹
     * @param {Object} data 文件夹信息 
     */
    async add(folder: folderInterface) {
        const model: any = new FolderModel(folder);

        const result: any = model.save((err, folder) => {

            if (err) {
                throw new HttpException('系统错误', 500);
            }

            return folder;
        })

        return result;
    }

    /**
     * 更新文件夹
     */
    async update(param: any, data: any) {
        return await FolderModel.update(param, data, (err, doc) => {
            if (err) {
                throw new HttpException('系统错误', 500);
            }

            return doc;
        })
    }

    /**
     * 获取所有文件夹
     */
    async get(id: String) {
        return await FolderModel
            .findById(id, {"__v": 0})
            .populate(fetchFolder)
            .populate('images')
            .exec((err, folder) => {
            if (err) {
                throw new HttpException('系统错误', 500);
            }

            return folder;
        })
    }

    /**
     * 获取指定文件夹
     * @param id 查询指定id
     */
    async findById(id: String) {
        return await FolderModel
            .findById(id, {"_v": 0, childrens: 0}, (err, folder) => {
                if (err) {
                    throw new HttpException('系统错误', 500);
                }
    
                return folder;
            })
    }

    /**
     * 初始化文件夹
     */
    async initFolder(userId: String, userName: String) {
        const name: String = `${userName}-初始化文件夹`;
        return await FolderModel.create({name, ower: userId}, (err, folder) => {
            if (err) {
                throw new HttpException('系统错误', 500);
            }

            return folder;
        })
    }
}
