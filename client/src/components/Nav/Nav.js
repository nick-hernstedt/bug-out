import React from "react"
import { Layout, Header, Content } from "react-mdl";


function Nav()  {
    return (
        <div className="demo-big-content">
        <Layout>

            <Header title="Bug-Out" scroll>

                
               
                    <a href="#">Logout</a>
            </Header>
       
           
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
    </div>
    )
} 

export default Nav;