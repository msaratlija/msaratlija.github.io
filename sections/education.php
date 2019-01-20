<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <h2>Training</h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-10 col-md-offset-2">
            <p class="description">Education</p>
        </div>
    </div>

        <element-info v-for="item in edu" :section="item"></element-info>

    <div class="row">
        <div class="col-md-10 col-md-offset-2">
            <p class="description">Experiences</p>
        </div>
    </div>
    
        <element-info v-for="item in exp" :section="item"></element-info>
</div>