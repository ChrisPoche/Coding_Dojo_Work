using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuotingDojo.Models;
using DbConnection;
using MySql.Data;

namespace QuotingDojo.Controllers
{
    public class HomeController : Controller
    {
        private DbConnector sql;

        public HomeController(){
            sql = new DbConnector();
        }


        [HttpGet]
        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/quotes")]
        public IActionResult Quotes()
        {
            string query = "SELECT * FROM quotes ORDER BY created_at DESC";
            var quotes = sql.Query(query);
            ViewBag.quotes = quotes;
            return View();
        }

        [HttpPost]
        [Route("/quotes")]
        public IActionResult PostQuotes(string name, string quote)
        {
            string query = $"INSERT INTO quotes (quote, name, created_at, updated_at) VALUES ('{quote}', '{name}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
            sql.Execute(query);
            Console.WriteLine(name);
            Console.WriteLine(quote);
            return RedirectToAction("Quotes");
        }

        public IActionResult Error()
        {
            return RedirectToAction("Index");
        }
    }
}
