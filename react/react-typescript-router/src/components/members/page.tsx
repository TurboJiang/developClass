import * as React from 'react';
import { memberAPI } from '../../api/member'
import { MemberEntity } from '../../model'
import { members } from '../../api/member/mockData';

// export const MembersPage: React.StatelessComponent<{}> = () => {
//     return (
//         <div className="row">
//             <h2>Members Page</h2>
//         </div>
//     )
// }

// 声明state中必有members members必定要符合MemberEntity[]格式
interface State {
    members: MemberEntity[]
}
interface Props {

}

// 有状态的组件
// 用泛型传进值 Props State也是接口需要自定义数据类型
export class MembersPage extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {
            members: []
        }
    }
    public componentDidMount() {
        // Promise
        memberAPI.fetchMembers().then((members)=> {
            this.setState({
                members
            })
        })
    }
    // 动态语言中国需要定义静态的方法
    public render() {
        return (
            <div>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        {
                            this.state.members.map(MemberRow)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const MemberRow = (member: MemberEntity) => {
    return (
        <tr key={member.id}>
            <td>
                <img src={member.avatar_url} className="avatar" alt="" />
            </td>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    )
}