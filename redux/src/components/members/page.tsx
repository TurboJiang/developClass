import * as React from 'react';
import { MemberEntity } from '../../model';

interface Props {
    members: MemberEntity[];
    fetchMembers(): void;
}

// 对传进的参数进行类型约束
export class MembersPage extends React.Component<Props, {}>{
    constructor(props) {
        super(props);
        this.state = {
            members: []
        }
    }
    public componentDidMount() {
        this.props.fetchMembers();
    }
    public render() {
        return (
            <div className="row">
                <h2> Page Message</h2>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        {
                            this.props.members.length
                        }条数据
          </tbody>
                </table>

            </div>
        )
    }
}