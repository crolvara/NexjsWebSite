"use client";

import React from "react";
import { Layout } from "antd";
import AppHeader from "../../AppHeader";
import AppFooter from "../../AppFooter";

const { Content } = Layout; // Деструктурирате Content от Layout

export default function About() {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div>
          <h1>About Us</h1>
          <p>This is the about page.</p>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}
