import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Context } from 'services/routing/context';
import { AddStoryProvider } from 'containers/AddStory/addStoryContext';
import { StoriesView } from 'containers/Stories/StoriesView';
import './scss/componentsStyle/App.scss';
import { StoryView } from 'containers/Story/StoryView';
import { AddStoryView } from 'containers/AddStory/AddStoryView';
import { StoryVideo } from 'containers/Story/components/StoryVideo';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const App = () => {
    return (
        <Context.Provider history={history}>
            <AddStoryProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={StoriesView} />
                        <Route path="/story" component={StoryView} />
                        <Route
                            path="/addStory"
                            exact={true}
                            component={AddStoryView}
                        />
                        <Route path="/publicStory/:id" component={StoryVideo} />
                    </Switch>
                </BrowserRouter>
            </AddStoryProvider>
        </Context.Provider>
    );
};
