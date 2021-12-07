using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireFest.DAL.Models.Models
{
    public class CandidateResponse
    {
        public long candidateAssessmentId { get; set; }
        public long assessmentQuestionId { get; set; }
        public long questionOptionId { get; set; }
    }
}
