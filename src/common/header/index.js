import React,{Component} from 'react';
import '../../statics/font_icon/iconfont.css'
import {
  HeaderWrapper,
  Logo,
   Nav ,
  NavItem,
  NavSarch,
  Addition,
  SearchWrapper,
  Button
} from './style'



class Header extends Component {
  constructor(props){
    super(props);
    // this.state.focused = false;
  }


  render (){
    return (
      <HeaderWrapper> 
        <Logo href='/'/>   
        <Nav>
          <NavItem className="active">首页</NavItem>
          <NavItem>下载app</NavItem>
          <SearchWrapper>
            <NavSarch/>
            <i className='iconfont'>&#xe60e;</i>
          </SearchWrapper>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">
            <i className="iconfont">&#xe708;</i>
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;