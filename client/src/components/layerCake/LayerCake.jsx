/**
 * @file LayerCake
 * @author denglingbo
 *
 * 已经添加的组件列表组件
 */
import React, { PureComponent } from 'react';
import { is } from 'immutable';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { activeComponent } from '../../pages/editor/App';
import List from './List';

import './layerCake.scss';

class LayerCake extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeId: props.activeId,
            data: props.data,
            active: props.active,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!is(this.state.props, nextProps.data)) {
            this.setState({
                data: nextProps.data,
            })
        }

        if (!is(this.state.active, nextProps.active)) {
            this.setState({
                active: nextProps.active,
            })
        }

        if (!is(this.state.activeId, nextProps.activeId)) {
            this.setState({
                activeId: nextProps.activeId,
            })
        }
    }

    handleActive = (guid) => {
        // 实际上被编辑的元素
        const editTarget = document.getElementById(guid);

        this.setState({
            current: guid
        }, () => {
            try {
                document.querySelector(`#${guid}`).scrollIntoView(true);
            } catch(e) {}

            activeComponent(guid, editTarget);
        })

    }

    render() {
        const { data, active, activeId } = this.state;

        const cls = classNames('ec-editor-layer-cake', {
            'ec-editor-layer-cake-active': active,
        });

        return (
            <div className={cls}>
                <div className="ec-editor-layer-cake-title">已添加组件</div>
                <List
                    data={data}
                    active={active}
                    activeId={activeId}
                    onActive={this.handleActive}
                />
            </div>
        );
    }
}

export default LayerCake;
