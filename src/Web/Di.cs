using Autofac;
using Autofac.Extensions.DependencyInjection;
using ImplantChoice.Repository;
using ImplantChoice.Business;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SimpleNet.Core.Data.SqlServer;
using SimpleNet.Core.Data;

namespace Web
{
    public static class DiRegistrar
    {
        public static IContainer RegisterApplicationDependencies(this IServiceCollection services, IConfigurationRoot configuration)
        {
            // Create the container builder.
            var builder = new ContainerBuilder();

            builder.RegisterConfigurations(configuration);
                
            builder.AddImplantChoiceRepositories();
            builder.AddImplantChoiceBusinessRules();

            builder.Populate(services);
            return builder.Build();
        }

        public static void RegisterConfigurations(this ContainerBuilder builder, IConfigurationRoot configuration)
        {
            var insightConnection = configuration.GetConnectionString("ImplantChoice");

            // Add custom dependency injection stuff here!!
            // builder.RegisterInstance(insightConnection).Named<string>("ImplantChoice");
            // builder.RegisterType<SqlServerProvider>()
            //                    .WithParameter((pi, c) => pi.Name == "connectionString",
            //                                    (pi, c) => c.ResolveNamed<string>("ImplantChoice"))
            //                    .Keyed<ISimpleDatabaseProvider>("ImplantChoice")
            //                    .InstancePerDependency();


            // Register database provider here!
            builder.RegisterType<SqlServerProvider>()
                    .Keyed<ISimpleDatabaseProvider>("ImplantChoice")
                    .WithParameter(new NamedParameter("connectionString", insightConnection))
                    .InstancePerLifetimeScope();
        }

        

    }
}
