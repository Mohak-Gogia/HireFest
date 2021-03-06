//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HireFestDAL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class QuestionOption
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public QuestionOption()
        {
            this.CandidateAnswers = new HashSet<CandidateAnswer>();
        }
    
        public long OptionId { get; set; }
        public string Description { get; set; }
        public Nullable<bool> isAnswer { get; set; }
        public Nullable<long> assessmentQuestionId { get; set; }
    
        public virtual AssessmentQuestion AssessmentQuestion { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateAnswer> CandidateAnswers { get; set; }
    }
}
