namespace BackEnd.Api.Dtos
{
    public class CreatePostDto
    {
        public string Content { get; set; }
        public string PhotoUrl { get; set; }
    }

    public class UpdatePostDto : CreatePostDto
    {
        public int? Id { get; set; }
    }
}