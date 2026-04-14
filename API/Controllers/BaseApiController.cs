using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BaseApiController: ControllerBase
{
    // this is the old way of doing things, we will be using the new way of doing things which is to use the Mediator pattern to handle our requests and responses, this way we can keep our controllers clean and simple and we can also easily test our controllers without having to worry about 
    // the database context or any other dependencies that we might have in our controllers.
    // private readonly AppDbContext _context;

    // public BaseApiController (AppDbContext context)
    // {
    //     _context = context;
    // }

    // [HttpGet]
    // public async Task<ActionResult<List<Activity>>> GetActivities()
    // {
    //     return await context.Activities.ToListAsync();
    // }

}
