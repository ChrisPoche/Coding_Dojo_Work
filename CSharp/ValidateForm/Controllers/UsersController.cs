using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ValidateForm.Models;

namespace ValidateForm.Controllers
{
    public class UsersController : Controller
    {
        [HttpGet]
        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("/")]
        public IActionResult FormSubmission(string first_name, string last_name, int age, string email, string password)
        {
            User user = new User{
                first_name = first_name,
                last_name = last_name,
                age = age,
                email = email,
                password = password
            };
            if(TryValidateModel(user) == false){
                ViewBag.errors = ModelState.Values;
                ViewBag.first_name = first_name;
                ViewBag.last_name = last_name;
                ViewBag.age = age;
                ViewBag.email = email;
                return View("Error");
            }
            return View("Success");
        }

        [HttpGet]
        [Route("/success")]
        public IActionResult Success()
        {
            return View();
        }
        
        [HttpGet]
        [Route("/error")]
        public IActionResult Error()
        {
            return View();
        }

    }
}
