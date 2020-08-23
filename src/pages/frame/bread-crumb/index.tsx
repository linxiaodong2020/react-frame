import * as React from 'react';
import { Breadcrumb } from 'antd';
import "./index.scss"
export interface IBreadCrumbProps {
}

export default class BreadCrumb extends React.Component<IBreadCrumbProps> {
    public render() {
        return (
            <div className="bread-crumb-wrapper">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}
