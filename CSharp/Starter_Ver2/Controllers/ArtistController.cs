using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using JsonData;
using System;

namespace MusicApi.Controllers {

    
    public class ArtistController : Controller {

        private List<Artist> allArtists;

        public ArtistController() {
            allArtists = JsonToFile<Artist>.ReadJson();
        }

        //This method is shown to the user navigating to the default API domain name
        //It just display some basic information on how this API functions
        [Route("")]
        [HttpGet]
        public string Index() {
            //String describing the API functionality
            string instructions = "Welcome to the Music API~~\n========================\n";
            instructions += "    Use the route /artists/ to get artist info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *RealName/{string}\n";
            instructions += "       *Hometown/{string}\n";
            instructions += "       *GroupId/{int}\n\n";
            instructions += "    Use the route /groups/ to get group info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *GroupId/{int}\n";
            instructions += "       *ListArtists=?(true/false)\n";
            return instructions;
        }

        [HttpGet]
        [Route("/artists")]
        public JsonResult Artists(){
            return Json(allArtists);
        }
        [HttpGet]
        [Route("/artists/name/{name}")]
        public JsonResult ArtistName(string name){
            var ArtName = from a in allArtists 
            where a.ArtistName.Contains(name)
            select a;
            return Json(ArtName);
        }
        [HttpGet]
        [Route("/artists/realname/{realName}")]
        public JsonResult ArtistRealName(string realName){
            var ArtName = from a in allArtists 
            where a.RealName.Contains(realName)
            select a;
            return Json(ArtName);
        }
        [HttpGet]
        [Route("/artists/hometown/{town}")]
        public JsonResult ArtistTown(string town){
            var ArtTown = from a in allArtists 
            where a.Hometown.Contains(town)
            select a;
            return Json(ArtTown);
        }
        [HttpGet]
        [Route("/artists/groupid/{id}")]
        public JsonResult ArtistTown(int id){
            var ArtGroupID = from a in allArtists 
            where a.GroupId.Equals(id)
            select a;
            return Json(ArtGroupID);
        }
    }
}