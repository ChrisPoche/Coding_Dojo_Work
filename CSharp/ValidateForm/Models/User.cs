using System.ComponentModel.DataAnnotations;
 
namespace ValidateForm.Models
{
    public abstract class BaseEntity{}
    public class User : BaseEntity
    {
        [Required]
        [MinLength(4)]
        public string first_name {get; set;}
        [Required]
        [MinLength(4)]
        public string last_name {get; set;}
        [Required]
        [Range(0,108)]
        public int age {get; set;}
        [Required]
        [EmailAddress]
        public string email {get; set;}
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string password {get; set;}
    }
}
