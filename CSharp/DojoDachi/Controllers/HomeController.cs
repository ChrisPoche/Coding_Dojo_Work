using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace DojoDachi.Controllers
{
    public class HomeController : Controller
    {

        Random rand = new Random();
        
        [HttpGet]
        [Route("/dojodachi")]
        public IActionResult Index()
        {
            TempData["alive"] = "true";
            int? energy = HttpContext.Session.GetInt32("energy");
            if(energy == null){
                HttpContext.Session.SetInt32("happiness", 20);
                HttpContext.Session.SetInt32("fullness", 20);
                HttpContext.Session.SetInt32("energy", 50);
                HttpContext.Session.SetInt32("meals", 3);
                HttpContext.Session.SetString("message","Welcome, here's your new DojoDachi, treat it well.");
                HttpContext.Session.SetString("emotion","new");
            }
            int? fullness = HttpContext.Session.GetInt32("fullness");
            int? happiness = HttpContext.Session.GetInt32("happiness");
            if(fullness == 0 || happiness == 0){
                TempData["alive"] = "false";
                HttpContext.Session.SetString("message","Your DojoDachi has died, better luck next time");
                HttpContext.Session.SetString("emotion","dead");
            }
            else if(energy >= 100 && happiness >= 100 && fullness >= 100){
                HttpContext.Session.SetString("message","Congratulations, you win!!! Your Dachi has reached enlightenment.");
                HttpContext.Session.SetString("emotion","win");
                TempData["alive"] = "false";
            }
            TempData["happiness"] = HttpContext.Session.GetInt32("happiness");
            TempData["fullness"] = HttpContext.Session.GetInt32("fullness");
            TempData["energy"] = HttpContext.Session.GetInt32("energy");
            TempData["meals"] = HttpContext.Session.GetInt32("meals");
            TempData["emotion"] = HttpContext.Session.GetString("emotion");
            TempData["message"] = HttpContext.Session.GetString("message");
            TempData["pic"] = $"/images/{@TempData["emotion"]}.png";
            Console.WriteLine($"The emotion string is {HttpContext.Session.GetString("emotion")}");
            Console.WriteLine($"The message is {TempData["message"]}");
            return View();
        }
        [HttpPost]
        [Route("/reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [HttpPost]
        [Route("/feed")]
        public IActionResult Feed()
        {
            int? meals = HttpContext.Session.GetInt32("meals");
            if(meals>0){
                meals -= 1;
                HttpContext.Session.SetInt32("meals",(int)meals);
                if(rand.Next(100) > 25){
                    int? fullness = HttpContext.Session.GetInt32("fullness");
                    int fill = rand.Next(5,11);
                    fullness += fill; 
                    HttpContext.Session.SetInt32("fullness",(int)fullness);
                    HttpContext.Session.SetString("message",$"Your Dachi ate some food, and became {fill} points fuller");
                    HttpContext.Session.SetString("emotion","eat");
                }
                else{
                    HttpContext.Session.SetString("message","Your Dachi wasn't hungry. Why don't you try some seasoning next time");
                    HttpContext.Session.SetString("emotion","nothungry");
                }
            }
            else{
                HttpContext.Session.SetString("message","You are out of meals, time to get a real job...");
                HttpContext.Session.SetString("emotion","nomeals");
            }   
            return RedirectToAction("Index");
        }

        [HttpPost]
        [Route("/play")]
        public IActionResult Play()
        {
            int? energy = HttpContext.Session.GetInt32("energy"); 
            if(energy>=5){
                energy -= 5;
                HttpContext.Session.SetInt32("energy",(int)energy);
                if(rand.Next(100) > 25){
                    int? happiness = HttpContext.Session.GetInt32("happiness");
                    int happier = rand.Next(5,11);
                    happiness += happier;
                    HttpContext.Session.SetInt32("happiness",(int)happiness);
                    HttpContext.Session.SetString("message",$"After playing with your Dachi it became {happier} points happier");
                    if(happier>=9){
                        HttpContext.Session.SetString("emotion","happier");
                    }
                    else{
                        HttpContext.Session.SetString("emotion","happy");
                    }
                }
                else{
                    HttpContext.Session.SetString("message","Your Dachi doesn't want to play right now");
                    HttpContext.Session.SetString("emotion","noplay");
                }
            }
            else{
                HttpContext.Session.SetString("message","Your Dachi is too tired to play");
                HttpContext.Session.SetString("emotion","tired");
            }   
            return RedirectToAction("Index");
        }

        [HttpPost]
        [Route("/work")]
        public IActionResult Work()
        {
            int? energy = HttpContext.Session.GetInt32("energy");
            if(energy<5){
                HttpContext.Session.SetString("message","Your Dachi is too tired to work");
                HttpContext.Session.SetString("emotion","tired");
            }
            else{
                energy -= 5;
                HttpContext.Session.SetInt32("energy",(int)energy);
                int? meals = HttpContext.Session.GetInt32("meals");
                int earned = rand.Next(1,4);
                meals += earned;
                HttpContext.Session.SetInt32("meals",(int)meals);
                HttpContext.Session.SetString("message",$"Your Dachi worked hard and earned itself {earned} meals");
                HttpContext.Session.SetString("emotion","earnmeal");
            }
            return RedirectToAction("Index");
        }

        [HttpPost]
        [Route("/sleep")]
        public IActionResult Sleep()
        {
            int? energy = HttpContext.Session.GetInt32("energy");
            int? fullness = HttpContext.Session.GetInt32("fullness");
            int? happiness = HttpContext.Session.GetInt32("happiness");
            energy += 15;
            fullness -= 5;
            if(fullness<0)
            {
                fullness = 0;
            }
            happiness -= 5;
            if(happiness<0)
            {
                happiness = 0;
            }
            HttpContext.Session.SetInt32("energy",(int)energy);
            HttpContext.Session.SetInt32("fullness",(int)fullness);
            HttpContext.Session.SetInt32("happiness",(int)happiness);
            HttpContext.Session.SetString("message","Your Dachi slept and gained 15 energy");
            HttpContext.Session.SetString("emotion","sleep");
            return RedirectToAction("Index"); 
        }
    }
}
