using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireFest.DAL.Models.Models
{
    public class CandidateResult
    {
        public long CandidateId { get; set; }
        public long AssessmentId { get; set; }
        public int Score { get; set; }
        public string Status { get; set; }
    }
}
