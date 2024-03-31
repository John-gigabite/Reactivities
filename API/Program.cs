
using API.Extensions;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

//Getting access to a Service
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    //Getting a hold of the DataContext Service
    var context = services.GetRequiredService<DataContext>();
    //Doing the same as the database Update command in the CLI
    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    //Displays exception
    logger.LogError(ex, "An error occured during mirgation");
}

app.Run();
