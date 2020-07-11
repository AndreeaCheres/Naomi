import React, { createContext } from 'react';

export const UserContext = createContext({
  userEmail: '',
  updateUserEmail: () => {},
});

export class UserProvider extends React.Component {
    updateUserEmail = newUserEmail => {
        console.log('updateUserEmail ' + newUserEmail);
        this.setState({ userEmail: newUserEmail });
    };

    state = {
        userEmail: null,
        updateUserEmail: this.updateUserEmail,
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export const UserConsumer = UserContext.Consumer;