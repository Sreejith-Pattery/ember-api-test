import Ember from 'ember';

const {Route, set } = Ember;

export default Route.extend({
    model(params){
        return this.store.query('post', { userId:params.id} );
        //return this.store.findAll('post');
    },

    
    setupController(controller, model){
        set(controller,'posts',model);
    }
});
