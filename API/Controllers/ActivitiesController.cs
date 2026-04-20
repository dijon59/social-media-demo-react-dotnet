using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Activities.Queries;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {  
        return await Mediator.Send(new GetActivityDetails.Query{Id = id});
    }
}
