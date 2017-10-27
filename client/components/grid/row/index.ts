import Row from './Row';
import './row.scss';

interface Config {
    name: string;
    disName?: string;
    menus?: Array<string>;
    editable: {
        style?: any,
        href?: any,
        row?: any,
        col?: any,
        component?: any,
        rowcol?: Array<any>
    };
}

const config: Config = {
    name: 'grid/row',
    disName: '行',
    editable: {
        style: {
            layout: ['Basic'],
            goodItem: ['Basic']
        },
    }
};

export {
    config,
}

export default Row;
