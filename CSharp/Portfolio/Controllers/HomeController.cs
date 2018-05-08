using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/projects")]
        public IActionResult Projects()
        {
            return View("Projects");
        }


        [HttpGet]
        [Route("/contact")]
        public IActionResult Contact()
        {
            return View("Contact");
        }

    }
}
