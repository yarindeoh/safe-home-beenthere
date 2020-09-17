import Configuration from 'services/api/configutation';
import { get, post } from 'services/api/restApiUtils';

function baseUrl(path) {
    const restPrefix = Configuration.get('apiPrefix');
    return `${restPrefix}/${path}`;
}

const Api = {
    postLogin: data => {
        return post(baseUrl('login'), data);
    },
    postModerateStory: data => {
        return post(baseUrl('addModerateStory'), data, { no_result: true });
    },
    getModerationStories: (pageSize, page, sortField, sortDirection) => {
        return get(
            baseUrl(
                `getStortiesForModeration?page=${page}&pageSize=${pageSize}&sortField=${sortField}&sortDirection=${sortDirection}`
            )
        );
    }
};

export default Api;
