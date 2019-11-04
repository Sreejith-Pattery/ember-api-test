import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        payload = { users: payload };
        console.log(payload);

        // payload.users.forEach((user)=>{
        //     post.user = post.userId;
        //     delete post.userId;
        // })
        return this._super(store, primaryModelClass, payload, id, requestType);
    },

   
});
