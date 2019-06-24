import React, { Component } from 'react'

const withLogin = (Component) => {
    const isLogin = true
    class newComponent extends Component {
        render() {
            if (!isLogin) {
                return (
                    <button>需要登录</button>
                )
            }
            return (
                <Component  />
            )
        }
    }
    newComponent.displayName = `withLogin(${Component.displayName})`
    return newComponent;
}

export default withLogin