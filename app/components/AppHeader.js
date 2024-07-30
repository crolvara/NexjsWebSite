"use client";

import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const AppHeader = () => {
  const items = [
    { key: '1', label: <Link href="/">Home</Link> },
    { key: '2', label: <Link href="components/pages/about">About Us</Link> },
    { key: '3', label: <Link href="components/pages/services">Services</Link> },
    { key: '4', label: <Link href="components/pages/projects">Projects</Link> },
    { key: '5', label: <Link href="components/pages/contacts">Contacts</Link> },
    { key: '6', label: <Link href="components/pages/blog">Blog</Link> },
  ];

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
    </Header>
  );
}

export default AppHeader;



