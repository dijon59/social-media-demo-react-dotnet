using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Activities.Queries;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();
builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>());
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

var app = builder.Build();

// Configure the HTTP request pipeline.
// These are middlewares configurations.
app.UseCors(option => option.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173", "https://localhost:5173"));

app.MapControllers();

using var scope = app.Services.CreateScope(); // Create a scope to get the services we need to seed the database with some initial data
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<AppDbContext>(); // Get the database context from the service provider
    // await context.Database.MigrateAsync(); // Apply any pending migrations to the database
    await DbInitializer.SeedData(context); // Seed the database with some initial data
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred seeding the DB.");
}

app.Run();
