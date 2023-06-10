<script>
export default {
    data(){
        return{
            msgIds: [],
            nextMsg: '',
            nextId: 0
        }
    },
    methods: {
        async fetchGitHubUsers(){
            console.log(this.msgIds)
            const res = await fetch('https://api.404founders.com/read/' + this.nextMsg )
            const data = await res.json()
            let Msg = { Id: data.MsgId.Item.MsgID.N, number: this.nextId, Text: data.MsgId.Item.Message.S, Sender: data.MsgId.Item.Sender.S, Recipient: data.MsgId.Item.Recipient.S }
            this.nextId += 1
            this.msgIds.push(Msg)
            console.log(data)
            return Msg
        },
        async onSubmit(e) {
            this.users = await this.fetchGitHubUsers()
        },
        deleteMsg(rownumber){
            console.log("Deleting: " + rownumber)
            this.msgIds = this.msgIds.filter((msg) => msg.number !== rownumber)
        }
    }
}
</script>
<template>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <input v-model="nextMsg" type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Msg #</th>
        <th scope="col">Sender</th>
        <th scope="col">Recipient</th>
        <th scope="col">Text</th>
        <th scope="col">Delete</th>
        </tr>
    </thead>
    <tbody>
        <tr :key="msg.number" v-for="msg in msgIds">
        <td>{{ msg.Id}}</td>
        <td>{{ msg.Sender }}</td>      
        <td>{{ msg.Recipient }}</td>
        <td>{{ msg.Text }}</td>
        <td>
            <button @click="deleteMsg(msg.number)"
            class="btn btn-danger">X</button>
        </td>
        </tr>
    </tbody>
    </table>
</template>


