using Autofac;
using ImplantChoice.Repository.Contracts;
using SimpleNet.Core.Data;
using SimpleNet.Core.Data.SqlServer;
using SimpleNet.Core.Data.Repository;
using System.Reflection;

namespace ImplantChoice.Repository
{
    public static class DiRegistration
    {
        public static void AddImplantChoiceRepositories(this ContainerBuilder builder)
        {

            builder.RegisterType<SqlServerProvider>()
                                .WithParameter((pi, c) => pi.Name == "connectionString",
                                                (pi, c) => c.ResolveNamed<string>("ImplantChoice"))
                                .Keyed<ISimpleDatabaseProvider>("ImplantChoice")
                                .InstancePerDependency();


            builder.RegisterType<SimpleDataAccessLayer>()
                            .WithParameter((pi, c) => pi.ParameterType == typeof(ISimpleDatabaseProvider),
                                            (pi, c) => c.ResolveNamed<ISimpleDatabaseProvider>("ImplantChoice"))
                            .Keyed<ISimpleDataAccessLayer>("ImplantChoice")
                            .InstancePerLifetimeScope();


            builder.RegisterAssemblyTypes(typeof(ImplantChoiceBaseRepo).GetTypeInfo().Assembly)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .WithParameter( (pi, c) => pi.ParameterType == typeof(ISimpleDataAccessLayer),
                                (pi, c) => c.ResolveNamed<ISimpleDataAccessLayer>("ImplantChoice"))
                .PropertiesAutowired()
                .InstancePerLifetimeScope();




        }

    }
}
