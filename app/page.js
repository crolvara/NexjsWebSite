"use client";

import React from "react";
import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div>
          <h1 style={{ background: "#000000", color: "#fff", padding: "20px" }}>
            Lorem Ipsum е просто примерен текст от печатарската и наборната
            индустрия. Lorem Ipsum е стандартният примерен текст в индустрията
            още от 1500-те години, когато неизвестен печатар взема галера от
            текст и я разбърква, за да създаде примерна книга. Той е оцелял не
            само пет века, но и скока към електронното наборно оформление,
            оставайки съществено непроменен. Популяризиран е през 1960-те години
            с издаването на Letraset листове, съдържащи Lorem Ipsum пасажи, а
            наскоро и с десктоп издателски софтуер като Aldus PageMaker,
            включващ версии на Lorem Ipsum.
          </h1>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}
