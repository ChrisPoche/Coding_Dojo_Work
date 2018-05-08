using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace callingCard.Controllers
{
    public class CallingCardController : Controller
    {
        [HttpGet]
        [Route("")]
        public string Index(){
            return "Here's the landing page, enter parameters in URL: localhost:5000/{FirstName}/{LastName}/{Age}/{Color}";
        }


        [HttpGet]
        [Route("{FirstName}/{LastName}/{Age}/{Color}")]
        public JsonResult DisplayResults(string FirstName, string LastName, int Age, string Color){
            var UrlResults = new {
                FirstName = FirstName,
                LastName = LastName,
                Age = Age,
                Color = Color,
            };
            return Json(UrlResults);
        }
    }
}
 