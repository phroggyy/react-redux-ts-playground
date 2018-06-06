import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {addPerson, PersonAction, removePerson, updatePerson} from "./actions";
import {bindIndexToActionCreator} from "./actions/support";
import './App.css';
import AppPerson from './PersonComponent';
import {IPerson, IStore} from "./types";

interface IProps {
    people: IPerson[]
    onAdd?: () => void
    onUpdate: (index: number) => (newData: IPerson) => () => void
    onRemove: (index: number) => () => void
    dispatch: Dispatch<PersonAction>
}

export function mapStateToProps(store: IStore) {
    return {
        people: store.people,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<PersonAction>) {
    return {
        onAdd: () => dispatch(addPerson()),
        onRemove: (index: number) => () => dispatch(bindIndexToActionCreator(removePerson, index)()),
        onUpdate: (index: number) => (newData: IPerson) => () => dispatch(bindIndexToActionCreator(updatePerson, index)(newData)),
    }
}

class App extends React.Component<IProps> {
    public render() {
        return (
          <div className="flex-1 w-full bg-grey-lightest">
              <div className="container mx-auto">
                  <header>
                      <h1>My people list</h1>
                  </header>
                  <div>
                      {this.props.people.map((person, index) =>
                        <div key={index} className="rounded shadow bg-white p-4 mt-2">
                            <AppPerson person={person}
                                       updatePerson={this.props.onUpdate(index)}
                                       removePerson={this.props.onRemove(index)}
                                       />
                        </div>
                      )}
                      <button className="mt-4 px-4 py-2 border border-green rounded hover:bg-green" onClick={this.props.onAdd}>Add person</button>
                  </div>
              </div>
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App as any)