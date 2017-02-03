using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace PersonalAngular2.Controllers
{
    [Route("api/[controller]")]
    public class WorkExperienceController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<WorkExperience> Experiences()
        {
            var gmi = new WorkExperience
            {
                Title = "General Mills",
                Description = "Fortune 100",
                Subtitle = "Fortune 100",
                Route = "/generalmills",
                ClassName = "gmi"
            };
            var sparkstarter = new WorkExperience
            {
                Title = "Sparkstarter",
                Description = "Fortune 100",
                Subtitle = "Mobile Startup",
                Route = "/sparkstarter",
                ClassName = "sparkstarter"
            };
            var exp = new[] { gmi, sparkstarter };
            return exp;
        }

        public class WorkExperience
        {
            public string Title { get; set; }
            public string Description { get; set; }
            public string Subtitle { get; set; }
            public string Route { get; set; }
            public string ClassName { get; set; }
        }
    }
}
