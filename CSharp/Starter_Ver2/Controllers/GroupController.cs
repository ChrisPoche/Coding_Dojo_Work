using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace MusicApi.Controllers {
    public class GroupController : Controller {
        List<Group> allGroups {get; set;}
        public GroupController() {
            allGroups = JsonToFile<Group>.ReadJson();
        }

        [HttpGet]
        [Route("/groups")]
        public JsonResult GetAll(){
            return Json(allGroups);
        }
        [HttpGet]
        [Route("/groups/name/{name}")]
        public JsonResult ArtistName(string name){
            var GroupName = from a in allGroups 
            where a.GroupName.Contains(name)
            select a;
            return Json(GroupName);
        }
        [HttpGet]
        [Route("/groups/id/{id}")]
        public JsonResult GroupId(int id){
            var GroupID = from a in allGroups
            where a.Id.Equals(id)
            select a;
            return Json(GroupID);
        }
    }
}