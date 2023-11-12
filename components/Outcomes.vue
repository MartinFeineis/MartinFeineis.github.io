<script>
export default {
    data(){
        return{
            outcomes:[
            ]
        }
    }
}

</script>
<template>
    <div v-for='job in jobs' :key='jobs.id'>
        <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target=job.selectStr  aria-expanded="false" aria-controls="collapseExample">
                {{ job.Company }}
            </button>
        </p>
        <div class="collapse" :id=job.Company>
            <!-- <div class="card card-body"> -->
                <div v-for='position in job.Positions' :key='position.id'>
                <div class="card card-body">
                <p>
                    <h5>{{ position.Title }}</h5>
                    <p><small>Started: {{ position.StartDate }} Finished: {{ position.EndDate }}</small></p>
                    <p>{{ position.Responsibilities }}</p>
                </p>
                </div>
            </div>
        </div>
    </div>
</template>
