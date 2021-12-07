using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireFest.DAL.Models.Models
{
    public class TestInformation
    {
        public long QuestionId { get; set; }
        public string Question { get; set; }
        public int Score { get; set; }
        public int Time { get; set; }
        public long OptionId { get; set; }
        public string Description { get; set; }
        public bool IsAnswer { get; set; }
    }
}
