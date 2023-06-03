<script>
export default {
    data(){
        return{
            jobs:[
                {
                    id: '4',
                    Company: "Cognizant",
                    selectStr: "#Cognizant",
                    Positions: [
                        {
                        id: '41',
                        Title: "Lead Consultant",
                        Responsibilities: "Wrote DO178C complaint Terraform IaC in AWS to for remote Pilots to communicate with unmanned aerial vehicles. Upskilled Engineering Team on Terraform basics industry best practices and CI/CD Implementations. Wrote HIPPA compliant serverless Cloudformation IaC and business logic in Python for Healthcare customers to solve crossstate plan coverage.",
                        StartDate: "January 2021",
                        EndDate: "present"
                        }
                    ]
                },
                {
                    id: '3',
                    Company: "Berkadia",
                    selectStr: "#Berkadia",
                    Positions: [
                        {
                        id: '31',
                        Title: "SRE",
                        Responsibilities: "Build Serverless Application for Mortgage Brokers to submit Property Data for commercial real estate developments.",
                        StartDate: "May 2020",
                        EndDate: "December 2020"
                        },
                        {
                        id: '32',
                        Title: "DevOps Engineer",
                        Responsibilities: "Supporting, driving and reviewing Change Management and Implementation. Resolving Deployment issues in production on Windows Servers with Powershell.",
                        StartDate: "June 2018",
                        EndDate: "May 2020"
                    }
                    ]
                },
                {
                    id: '2',
                    Company: "Cloudmine",
                    selectStr: "#Cloudmine",
                    Positions: [
                        {
                        id: '21',
                        Title: "SRE",
                        Responsibilities: "Maintained and improved HIPAA compliant AWS Software with focus on high availability, and self-healing rapid failover processes.",
                        StartDate: "April 2017",
                        EndDate: "April 2018"
                        }
                    ]
                },
                {
                    id: '1',
                    Company: "PointIO",
                    selectStr: "#PointIO",
                    Positions: [
                        {
                        id: '11',
                        Title: "DevOps Engineer",
                        Responsibilities: "Build 1-click CI/CD Pipeline allowing globally distributed Engineers to deploy changes reliable into Development environments including rollback strategies.",
                        StartDate: "Deember 2014",
                        EndDate: "March 2017"
                        }
                    ]
                }
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