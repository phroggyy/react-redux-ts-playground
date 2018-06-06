import * as React from "react";
import {Dispatch} from "react-redux";
import {PersonAction} from "./actions";
import {IPerson} from "./types";

interface IProps {
    person: IPerson
    updatePerson: (newData: any) => () => void
    dispatch: Dispatch<PersonAction>
}

export default class PersonComponent extends React.Component<IProps> {
    public render() {
        return (
          <form className="flex">
              <div className="flex flex-col w-1/2">
                  <label className="text-grey-darker">Name</label>
                  <input type="text" className="p-2 border-b border-grey focus:border-blue" placeholder="John Doe" value={this.props.person.name} onChange={(e) => this.props.updatePerson({name: e.target.value})()} />
              </div>
              <div className="flex flex-col w-1/2">
                  <label className="text-grey-darker">Email</label>
                  <input type="text" className="p-2 border-b border-grey focus:border-blue" placeholder="john@example.com" value={this.props.person.email} onChange={(e) => this.props.updatePerson({email: e.target.value})()} />
              </div>
          </form>
        )
    }
}