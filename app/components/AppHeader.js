"use client";

import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

class AppHeader extends Component {
    render() {
        // Дефиниране на елементите на менюто
        const items = [
            {
                key: '1',
                label: <Link href="/">Home</Link>,
            },
            {
                key: '2',
                label: <Link href="/about">About</Link>,
            },
            {
                key: '3',
                label: <Link href="/contact">Contact</Link>,
            },
        ];

        return (
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
            </Header>
        );
    }
}

export default AppHeader;


