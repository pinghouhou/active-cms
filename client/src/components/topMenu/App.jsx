import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Font from 'font';
import { Row, Col, Button, Icon } from 'antd';
import { addComponent, saveData, viewer } from '../../pages/editor/App';

class TopMenu extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div
                className="ec-editor-banner"
            >
                <Row>
                    <Col span={4} className="ec-editor-banner-left">
                        <span>Static</span>
                    </Col>
                    <Col span={14} className="ec-editor-banner-center">
                        <ul className="ec-editor-component">
                            <li
                                data-name="layer"
                                onClick={addComponent}
                                className="ec-editor-component-list"
                            >
                                <Icon type="layout" />
                                <span>楼层</span>
                            </li>
                            <li
                                data-name="fix"
                                onClick={addComponent}
                                className="ec-editor-component-list"
                            >
                                <Icon type="user" />
                                <span>悬停</span>
                            </li>
                            <li
                                data-name="tab"
                                onClick={addComponent}
                                className="ec-editor-component-list"
                            >
                                <Icon type="user" />
                                <span>Tab</span>
                            </li>
                        </ul>
                    </Col>
                    <Col span={6} className="ec-editor-banner-right">
                        <Button
                            className="ec-editor-btn"
                            size="small"
                            onClick={viewer}
                        >
                            预览和设置
                        </Button>
                        <Button
                            className="ec-editor-btn"
                            size="small"
                            onClick={saveData}
                        >
                            保存
                        </Button>
                        <Button
                            className="ec-editor-btn"
                            size="small"
                        >
                            发布
                        </Button>
                        <Button
                            className="ec-editor-btn ec-editor-btn-red"
                            size="small"
                        >
                            退出
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TopMenu;
