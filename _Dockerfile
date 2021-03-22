FROM mrc.microsoft.com/dotnet/core/sdk:3.1 AS build-dev

WORKDIR /app

COPY . ./

RUN dotnet publish -c Release -o out 

FROM mrc.microsoft.com/dotnet/core/aspnet:3.1

WORKDIR /app

COPY --from=build-dev /app/out . 

ENV ASPNETCORE_ENVIRONMENT Production

ENTRYPOINT ["dotnet", "XXXXXX.Ui.api.dll"]