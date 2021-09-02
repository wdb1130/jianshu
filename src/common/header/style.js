import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  line-height: 58px;
  border: 1px solid #f0f0f0;
  background: #fff;
`

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  line-height: 58px;
  background: url(${logoPic}) no-repeat center center;
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  line-height: 58px;
  margin: 0 auto;
`

export const NavItem = styled.div`
  padding: 0 15px;
  font-size: 17px;
  float: left;
  color: #333;
  &.right {
    float: right;
    color: #999;
  }
  &.active {
    color: #ea6f5a;
  }
`


export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 10px;
    height: 26px;
    width: 26px;
    text-align: center;
    border-radius: 50%;
    line-height: 26px;
    top: 18px;
    color: #969696;
    // transition: all 0.3s linear;

  }
`


export const NavSarch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 19px;
  margin-left: 20px;
  transition: width 0.3s linear;
  &::placeholder {
    color: #999;
  }
  &:focus {
    width: 200px;
    &+.iconfont {
      background: #888;
      color: #fff;
    }
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height:  38px;
  border-radius: 18px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
