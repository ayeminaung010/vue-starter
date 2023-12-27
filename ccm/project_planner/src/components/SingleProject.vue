<template>
     <div class="project" :class="{complete:project.complete}">
        <div class="flexing">
            <div>
                <h3 @click="showDetails=!showDetails">{{project.title}}</h3>
            </div>
            <div>
                <span class="material-icons" @click="deleteProject">
                delete
                </span>
                <router-link :to="{name: 'editProject',params:{id:project.id}}">
                    <span class="material-icons">
                    edit
                    </span>
                </router-link>
                <span class="material-icons" @click="completeProject">
                done
                </span>
            </div>
        </div>
       
        <p v-if="showDetails">{{project.detail}}</p>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data(){
        return {
            showDetails : false,
            api: "http://localhost:3000/projects/"
        }
    },
    methods: {
        deleteProject(){
            const deletePath = this.api + this.project.id;
            fetch(deletePath,{method: "DELETE"})
            .then(() => {
                this.$emit("delete",this.project.id)
            })
            .catch((err) => {
                console.log(err);
            })
        },
        completeProject(){
            const updatePath = this.api + this.project.id;
            fetch(updatePath,{method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(
                    {
                        complete:!this.project.complete
                    }
                )
            })
            .then(() => {
                this.$emit("complete",this.project.id)
            })
            .catch((err) => {
                console.log(err);
            })
            
        }
    }
}
</script>

<style>
    .project {
        background-color: #efefef; 
        padding: 20px;
        border-left: 6px solid crimson;
        border-radius: 8px;
        margin: 10px ;
    }
    h3{
        cursor: pointer;
        color:indigo;
    }
    .flexing{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        margin-left:10px;
    }
    span:hover{
        cursor: pointer;
        color:#777;
    }
    .complete{
        border-left: 6px solid green;
    }
</style>