import Floor from './Layer';

interface Config {
    name: string;
    displayName?: string,
    menus: Array<string>;
    editable: any;
}

const config: Config = {
    name: 'layer',
    displayName: '布局',
    menus: ['preImage', 'tabs', 'layer', 'img', 'float', 'hotMap', 'goods', 'grid', 'list'],
    editable: {
        style: {
            layout: ['Basic'],
        },
        anchor: [{label: '设置锚点', component: 'Attr'}],
    }
};

export {
    config,
}

export default Floor;
