using Autofac;
using Autofac.Extensions.DependencyInjection;
using ImplantChoice.Repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Web
{
    public static class Di
    {
        public static IContainer AddAutofac(this IServiceCollection services, IConfigurationRoot configuration)
        {
            // Create the container builder.
            var builder = new ContainerBuilder();
            


            // Add custom dependency injection stuff here!!
            builder.RegisterInstance(configuration.GetConnectionString("ImplantChoice"))
                    .Named<string>("ImplantChoice");

            builder.AddImplantChoiceRepositories();

            builder.Populate(services);
            return builder.Build();
        }
    }
}
