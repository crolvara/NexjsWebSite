import { Breadcrumb, Layout, Menu, theme } from 'antd';

import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


export default function Home() {
  return (
    <Layout>
    <AppHeader/> 
    <div>
      <h1 style={{background: '#000000'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
    </div>
    <AppFooter/>
    </Layout>
  );
}

