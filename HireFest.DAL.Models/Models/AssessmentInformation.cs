using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireFest.DAL.Models.Models
{
    public class AssessmentInformation
    {
        public long AssessmentId { get; set; }
        public string Title { get; set; }
        public string Topics { get; set; }
        public string Description { get; set; }
        public int Time { get; set; }
        public int Score { get; set; }
    }
}
