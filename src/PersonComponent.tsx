import * as React from "react";
import {IPerson} from "./types";

interface IProps {
    person: IPerson
    updatePerson: (newData: any) => () => void
    removePerson: () => void
}

export default class PersonComponent extends React.Component<IProps> {
    public render() {
        return (
          <div className="flex items-end">
              <div className="flex flex-col flex-1">
                  <label className="text-grey-darker">Name</label>
                  <input type="text" className="p-2 border-b border-grey focus:border-blue" placeholder="John Doe" value={this.props.person.name} onChange={(e) => this.props.updatePerson({name: e.target.value})()} />
              </div>
              <div className="flex flex-col flex-1">
                  <label className="text-grey-darker">Email</label>
                  <input type="text" className="p-2 border-b border-grey focus:border-blue" placeholder="john@example.com" value={this.props.person.email} onChange={(e) => this.props.updatePerson({email: e.target.value})()} />
              </div>
              <div>
                <button className="ml-1 rounded text-white bg-red p-2" onClick={this.props.removePerson}>Remove</button>
              </div>
          </div>
        )
    }
}