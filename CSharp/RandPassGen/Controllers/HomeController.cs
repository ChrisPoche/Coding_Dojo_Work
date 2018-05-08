using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace RandPassGen.Controllers
{
    public class HomeController : Controller
    {
        int passNum = 1; 
        
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {   
            if(HttpContext.Session.GetInt32("PassNum")== null){
                HttpContext.Session.SetInt32("PassNum",passNum);
            }
            else{
                int? plusUp = HttpContext.Session.GetInt32("PassNum")+1;
                int Count = (int)plusUp;
                HttpContext.Session.SetInt32("PassNum",Count);
            }
            string choice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            string RP = "";
            Random rand = new Random();
            for(short i=0;i<14;i++){
                int LoD = rand.Next(0,choice.Length);
                    Console.WriteLine($"LoD: {LoD},char: {choice[LoD]},num: {i+1}");
                    RP += choice[LoD];
                }
            ViewBag.RandomPass = RP;
            ViewBag.PassNum = HttpContext.Session.GetInt32("PassNum");
            return View();
        }
    }
}
